import { faker } from '@faker-js/faker';

export class TextsBuilder {
    addUserMessage(){
        this.userText = faker.lorem.sentences({ min: 1, max: 3 })
        return this;
    }
    addMessageWord(){
        this.userWord = faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' })
        return this;
    }
    addMessageTags(){
        this.userTags = faker.lorem.word({ length: { min: 3, max: 6 }, strategy: 'closest' })
        return this;
    }
    generate(){
        const copied = structuredClone(
            {
                userText: this.userText,
                userWord : this.userWord,
                userTags: this.userTags,
            }
        )
        return copied
    }
}