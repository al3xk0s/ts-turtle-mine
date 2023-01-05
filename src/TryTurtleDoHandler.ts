interface ITryTurtleDoHandler {
    exec() : boolean;

    get currentAttemptCount(): number;
}

class TryTurtleDoHandler implements ITryTurtleDoHandler {
    constructor(
        private readonly executor: () => boolean, 
        private readonly handler: () => void,
        private readonly attemptLimit: number,
    ) { }

    private _currentAttemptCount: number = 0;

    exec(): boolean {
        this._currentAttemptCount = 0;
        
        let isSuccess = this.executor();

        while(!isSuccess) {
            this.handler();
            isSuccess = this.executor();
            this._currentAttemptCount++;

            if(this._currentAttemptCount >= this.attemptLimit) break;
        }

        return isSuccess;
    }

    get currentAttemptCount(): number {
        return this._currentAttemptCount;
    }
    
}

