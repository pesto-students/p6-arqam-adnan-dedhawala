const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending"
};

class CustomPromise {
  #thenCallbacks = [];
  #catchCallbacks = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);

  constructor(callback) {
    try {
      callback(this.#onSuccessBind, this.#onFailBind);
    } catch (e) {
      this.#onFail(e);
    }
  }

  #runCallbacks = () => {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCallbacks.forEach(callback => {
        callback(this.#value);
      });

      this.#thenCallbacks = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCallbacks.forEach(callback => {
        callback(this.#value);
      });
      this.#catchCallbacks = [];
    }
  };

  #onSuccess(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof CustomPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }
      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof CustomPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }

      if (this.#catchCallbacks.length === 0) {
        throw new UncaughtPromiseError(value);
      }
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then(thenCallback, catchCallback) {
    return new CustomPromise((resolve, reject) => {
      this.#thenCallbacks.push(result => {
        if (thenCallback == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCallback(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCallbacks.push(result => {
        if (catchCallback == null) {
          reject(result);
          return;
        }

        try {
          resolve(catchCallback(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#runCallbacks();
    });
  }

  catch(callback) {
    return this.then(undefined, callback);
  }

  finally(callback) {
    return this.then(
      result => {
        callback();
        return result;
      },
      result => {
        callback();
        throw result;
      }
    );
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);

    this.stack = `(in promise) ${error.stack}`;
  }
}

module.exports = CustomPromise;
