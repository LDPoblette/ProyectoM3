import React, { useState } from "react";
import { Btn } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { FormDisk } from "./styles";
import { Validation } from "../Shared/styles";

function NewDisk(props) {
    const [id, setId] = useState()
    const [diskName, setDiskName] = useState('');
    const [artist, setArtist] = useState('');
    const [gender, setGender] = useState('');
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);
    const [d, setD] = useState(false);

    function handleId(event){
        setId(event.target.value)
    }

    function handleNewDisk(){
        props.onNewDisk({
            id: id,
            name: diskName,
            artist: artist,
            gender: gender
        })
    }

    return(
        <FormDisk>

            <Validation className={`${(!id && a) ? "isInvalid" : ""}`}>
                <label htmlFor="input-id">ID</label>
                <Input name="input-id" type="number" onChange={handleId}
                 onBlur={() => setA(true)} value={id}></Input>
            </Validation>

            <Validation className={`${(!diskName && b) ? "isInvalid" : ""}`}>
                <label htmlFor="input-name">Nombre de disco</label>
                <Input name="input-name" type="text" placeholder="Disco" 
                onChange={(event) => setDiskName(event.target.value)} 
                onBlur={() => setB(true)} value={diskName}/>
            </Validation>   

            <Validation className={`${(!artist && c) ? "isInvalid" : ""}`}>
                <label htmlFor="input-artist">Artista</label>
                <Input name="input-artist" type="text" placeholder="Artista" 
                onChange={(event) => setArtist(event.target.value)} 
                onBlur={() => setC(true)} value={artist}/>
            </Validation>
           
            <Validation className={`${(!gender && d) ? "isInvalid" : ""}`}>
                <label htmlFor="input-gender">Genero</label>
                <Input name="input-gender" type="text" placeholder="Genero" 
                onChange={(event) => setGender(event.target.value)} 
                onBlur={() => setD(true)} value={gender}/>
                <Btn onClick={handleNewDisk}>Agregar disco</Btn>
            </Validation>

        </FormDisk>
    )
}

export default NewDisk;