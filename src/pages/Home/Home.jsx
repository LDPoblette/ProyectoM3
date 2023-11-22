import React from "react";
import Card from "../../components/UI/Card/Card";
import { HomeLayout } from "./styles";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
    return(
        <Card>
            <HomeLayout>
                <Carousel></Carousel>
                <h1>Encuentra aquí la mejor discografia</h1>
            </HomeLayout>
        </Card>
    )
}

export default Home;