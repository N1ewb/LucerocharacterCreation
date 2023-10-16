class CharacterType {
    constructor() {
        this.characterType = '';
        this.attack = 0;
        this.dexterity = 0;
        this.magic = 0;
        this.strength = 0;
        this.hp = 0;
    }

    setWizard() {
        this.characterType = 'wizard';
        this.attack = 10;
        this.dexterity = 10;
        this.magic = 30;
        this.strength = 10;
        this.hp = 100;
        return this;
    }

    setKnight() {
        this.characterType = 'knight';
        this.attack = 20;
        this.dexterity = 15;
        this.magic = 5;
        this.strength = 20;
        this.hp = 150;
        return this;
    }

    setSamurai() {
        this.characterType = 'samurai';
        this.attack = 25;
        this.dexterity = 20;
        this.magic = 10;
        this.strength = 25;
        this.hp = 120;
        return this;
    }

    build(playerName) {
        if (!this.characterType) {
            throw new Error('Character type not set.');
        }
        if (!playerName) {
            throw new Error('Player name is required.');
        }
        return {
            playerName: playerName,
            characterType: this.characterType,
            attack: this.attack,
            dexterity: this.dexterity,
            magic: this.magic,
            strength: this.strength,
            hp: this.hp
        };
    }
}

