(
    () => {
        // Aplicado el Principio de Responsabilidad Unica :D
        // Priorizar la composición frente a la herencia!
        type Gender = 'M' | 'F'

        interface PersonProps {
            name: string;
            gender: Gender;
            birthdate: Date;
        }

        interface UserProps {
            email: string;
            role: string;
        }

        interface SettingsProps {
            workingDirectory: string;
            lastopenFolder  : string;
        }
        
        class Person {

            public name: string;
            public gender: Gender;
            public birthdate: Date;

            constructor({ name, gender, birthdate }: PersonProps ) {
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }
        
        class User {

            public lastAccess: Date;
            public email: string;
            public role: string;

            constructor({ email, role }: UserProps) {
                //super({ name, gender, birthdate });
                
                this.email = email;
                this.role = role;

                this.lastAccess = new Date();
            }

            checkcredentials(){
                return true;
            }
        }

        class Settings {

            public workingDirectory: string;
            public lastopenFolder  : string;

            constructor({ workingDirectory, lastopenFolder }: SettingsProps) {
                //super({ email, role, name, gender, birthdate })

                this.workingDirectory = workingDirectory;
                this.lastopenFolder = lastopenFolder;
            }
        }

        
        interface UserSettingsProps {
            workingDirectory: string;
            lastopenFolder  : string;
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;
        }

        class UserSettings {

            public person: Person;
            public user  : User;
            public settings  : Settings;

            constructor({
                name,
                gender,
                birthdate,
                email,
                role,
                workingDirectory,
                lastopenFolder,
            }: UserSettingsProps) {
                this.person = new Person({ 
                    name,
                    gender,
                    birthdate,
                });

                this.user = new User({
                    email,
                    role
                });

                this.settings = new Settings({
                    workingDirectory,
                    lastopenFolder,
                });
            }
        }

        const userSetting = new UserSettings({
            workingDirectory: '/usr/home',
            lastopenFolder: '/home',
            email: 'simon@gmail.com',
            role: 'Admin',
            name: 'Simón',
            gender: 'M',
            birthdate: new Date('1999-10-22')
        })

        console.log({ userSetting })

    }
)();