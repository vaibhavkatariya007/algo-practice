// Singleton Pattern

// function Process(state) {
//     this.state = state;
//     this.version = Math.floor(Math.random() * 4000);
// }

const ProcessManager = (function () {
    function ProManager() {
        this.numProcess = 0;
        this.version = Math.floor(Math.random() * 4000);
    }
    let pManager;
    function createProcessManager() {
        pManager = new ProManager();
        return pManager;
    }

    return {
        getProcessManager() {
            if (!pManager)
                pManager = createProcessManager();
            return pManager
        }
    }
})();


const P1 = ProcessManager.getProcessManager();
const P2 = ProcessManager.getProcessManager();

// Verify we are having single instance;
console.log(P1);
console.log(P2);
console.log(P1 === P2);

// Using Class Way
class Settings {
    constructor() {
        if (Settings.instance instanceof Settings) {
            return Settings.instance;
        }

        this.settingsObj = {
            'background': '#f0f0f0',
            'version': Math.floor(Math.random() * 4000)
        }
        Object.freeze(this.settingsObj);
        Object.freeze(this);
        Settings.instance = this;
    }

    getKey(key) {
        return this.settingsObj[key];
    }
};

const S1 = new Settings();
const S2 = new Settings();
console.log(S1.getKey('version'));
console.log(S2.getKey('version'));