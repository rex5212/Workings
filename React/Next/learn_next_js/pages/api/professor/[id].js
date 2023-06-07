import { child, get, ref, remove, update } from "firebase/database";
import { db } from "../../../services/firebase";

export default function handler(req, res) {

    const id = req.query.id

    if (req.method == "DELETE") {

        remove(ref(db, `school/professores/${id}`))

    } else if (req.method == "PUT" || req.method == "PATCH") { 

        const dados = req.body

        update(ref(db, "school/professores/" + id), dados)    
        res.status(200).json(dados)

        // // const dataKeys = push(child(ref(db), `disciplinas/${id}`)).key;
        // // console.log(dataKeys)

        // // const newData = {
        // //     name: dados.name,
        // //     modality: dados.modality,
        // //     duration: dados.duration
        // // };

        // // const updates = {};
        // // updates['/dados/' + dataKeys] = postData;


    } else if (req.method == "GET") {

        get(child(ref(db), 'disciplinas/' + id)).then(snapshot => {
            res.status(200).json(snapshot)
        })


    }
}