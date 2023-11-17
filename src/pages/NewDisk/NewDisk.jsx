import React, { useState } from "react";
import Card from "../../components/UI/Card/Card";
import { Btn } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { FormDisk } from "./styles";

function NewDisk(props) {
    const [id, setId] = useState()
    const [diskName, setDiskName] = useState('');
    const [artist, setArtist] = useState('');
    const [gender, setGender] = useState('');

    function handleId(event){
        setId(event.target.value)
    }

    function handleNewDisk(){
        props.onNewExpense({
            id: id,
            name: diskName,
            artist: artist,
            gender: gender
        })
    }

    return(
        <FormDisk>
            <div className="form" id="new-disk">
                <label htmlFor="input-id">ID</label>
                <Input name="input-id" type="text" onChange={handleId} value={id}/>

                <label htmlFor="input-name">Nombre de disco</label>
                <Input name="input-name" type="text" placeholder="Disco" 
                onChange={(event) => setDiskName(event.target.value)} value={diskName}/>

                <label htmlFor="input-artist">Artista</label>
                <Input name="input-artist" type="text" placeholder="Artista" 
                onChange={(event) => setArtist(event.target.value)} value={artist}/>

                <label htmlFor="input-gender">Genero</label>
                <Input name="input-gender" type="text" placeholder="Genero" 
                onChange={(event) => setGender(event.target.value)} value={gender}/>
                <Btn onClick={handleNewDisk}>Agregar disco</Btn>
            </div>
        </FormDisk>
    )
}

export default NewDisk;