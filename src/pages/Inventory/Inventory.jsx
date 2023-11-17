import React, { useState } from "react";
import Card from "../../components/UI/Card/Card";
import { InventoryLayout } from "./styles";
import Disk from "../../components/Disk/Disk";
import NewDisk from "../NewDisk/NewDisk";
import { Input } from "../../components/UI/Input/Input";
import { Btn } from "../../components/UI/Button/Button";
import { DiskLayout } from "../../components/Disk/styles";

function Inventory() {
    const [filter, setFilter] = useState('');
    const [disks, setDisks] = useState([
        {
            id: 1,
            name: "Be here now",
            artist: "Oasis",
            gender:  "Rock"
        },{
            id: 2,
            name: "Don't believe the truth",
            artist: "Oasis",
            gender:  "Rock"
        },{
            id: 3,
            name: "Spaghetti incident",
            artist: "Guns and roses",
            gender:  "Rock"
        }
    ]);

    function handleDisk(disk) {
        setDisks([...disks, disk]);
    }

    function handleFilter(event){
        setFilter(event.target.value);
    }

    return (
        <Card>
            <InventoryLayout>
                <NewDisk onNewDisk={handleDisk}></NewDisk>

                <DiskLayout>
                    <div className="form" style={{marginBottom: "15px"}}>
                        <label htmlFor="input-searching"></label>
                        <Input name="input-searching" type="text" placeholder="Introducir texto" 
                               value={filter} onChange={handleFilter}/>
                        <Btn>Buscar</Btn>
                    </div>

                    <table id="inventory">
                        <thead className="tfragment">
                            <tr>
                                <th className="tcell">ID</th>
                                <th className="tcell">Nombre</th>
                                <th className="tcell">Artista</th>
                                <th className="tcell">Genero</th>
                            </tr>
                        </thead>
                    </table>
                </DiskLayout>

                {disks
                    .filter((filt)=> (
                        filt.name.includes(filter) || filt.artist.includes(filter)
                        ))
                    .map((disk) => (
                        <Disk 
                        key={disk.id} 
                        id={disk.id} 
                        name={disk.name} 
                        artist={disk.artist} 
                        gender={disk.gender}
                        />
                    ))
                }
            </InventoryLayout>
        </Card>
    )
}

export default Inventory;