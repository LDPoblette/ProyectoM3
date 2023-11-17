import React from "react";
import Card from "../UI/Card/Card";
import { DiskLayout } from "./styles";

function Disk(props) {
    return(
        <>
            <DiskLayout>
                <table id="inventory">
                        <tbody className="tfragment">
                            <tr>
                                <td className="tcell">{props.id}</td>
                                <td className="tcell">{props.name}</td>
                                <td className="tcell">{props.artist}</td>
                                <td className="tcell">{props.gender}</td>
                            </tr>
                        </tbody>
                    </table>
            </DiskLayout>      
        </>
    )
}

export default Disk;