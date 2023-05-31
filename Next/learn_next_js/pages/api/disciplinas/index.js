import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../../../services/firebase"
import { child, get, ref, remove, set } from "firebase/database"
import { v4 } from "uuid";

export default function handler(req, res) {

    if (req.method == "GET") {

        get(child(ref(db), 'disciplinas')).then(snapshot => {
            const retorno = []
            snapshot.forEach(item => {
                retorno.push(item.val())
            });
            res.status(200).json(retorno)
        })


    } else if (req.method == "POST") {

        const dados = req.body
        const id = v4(dados)
        dados.id = id
        set(ref(db, `disciplinas/${id}`), dados);

        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //     });

    } else if (req.method == "PUT" || req.method == "PATCH") {

    } else if (req.method == "DELETE") {

        const dados = req.body

        console.log(dados)

        get(child(ref(db), 'disciplinas')).then(snapshot => {
            const retorno = []
            snapshot.forEach(item => {
                retorno.push(item.val())
                console.log(retorno)
            });
        })


        const tasksRef = ref(db, `disciplinas/${dados.id}`);

        remove(tasksRef).then((snapshot) => { });

    }

}