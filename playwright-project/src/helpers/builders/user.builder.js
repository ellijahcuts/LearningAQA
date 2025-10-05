import { faker } from '@faker-js/faker';

export class UserBuilder {
    addEmail(){
        this.userEmail = faker.internet.email()
        return this;
    }
    addPassword(){
        this.userPassword = faker.internet.password()
        return this;
    }
    addFirstName(){
        this.userFirstName = faker.person.firstName('male')
        return this;
    }
    addAvatar(){
        this.userAvatar = 'https://img.freepik.com/free-photo/portrait-ghanaian-man_53876-32448.jpg?semt=ais_incoming&w=740&q=80'
        return this;
    }
    generate(){
        const copied = structuredClone(
            {
                userEmail: this.userEmail,
                userPassword : this.userPassword ,
                userFirstName: this.userFirstName,
                userAvatar: this.userAvatar
            }
        )
        return copied
    }
}

