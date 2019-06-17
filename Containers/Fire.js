import firebase from "firebase";
import config from "../config"

class Fire {
    constructor(){
        this.init()
    }

    init = () =>
        firebase.initializeApp({
            apiKey: config.API_KEY,
            authDomain: config.AUTH_DOMAIN,
            databaseURL: config.DB_URL,
            projectId: config.PROJECT_ID,
            storageBucket: config.STORAGE_BUCKET,
            messagingSenderId: config.SENDER_ID,
            appId: config.APP_ID
    })

    get ref(){
        return firebase.database().ref("messages");
    }

    on = callback =>
        this.ref
            .limitToLast(20)
            .on("child_added", snapshot => callback(this.parse(snapshot)))


    parse = snapshot => {
        const {timestamp: numberStamp, text, user } = snapshot.val()
        const {key: _id } = snapshot
        const timestamp = new Date(numberStamp)
        const message = {
            _id,
            timestamp,
            text,
            user,
        }
        return message
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return firebase.database.ServerValue.TIMESTAMP
    }

    send = messages =>{
        for (let i = 0; i < messages.length; i++){
            const {text, user} = messages[i]

            const message = {
                text,
                user,
                timestamp: this.timestamp,
            }
            this.append(message)
        }
    }

    append = message => this.ref.push(message)

    off(){
        this.ref.off()
    }

}
Fire.shared=new Fire();
export default Fire;