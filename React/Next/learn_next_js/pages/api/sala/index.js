import { db } from "../../../services/firebase"
import { child, get, ref, remove, set } from "firebase/database"
import { v4 } from "uuid";

export default function handler(req, res) {

    if (req.method == "GET") {

        get(child(ref(db), 'school/salas')).then(snapshot => {
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
        set(ref(db, `school/salas/${id}`), dados);

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

    } 

}