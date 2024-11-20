import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CanvasJSReact from '@canvasjs/react-charts';

const PokemonDetailsPage = () => {
    const [detailsPokemon, setDetailsPokemon] = useState({});
    const [detailsPoke, setDetailsPoke] = useState({});
    const { id } = useParams();
    const [damage, setDamage] = useState([]);
    const [gameVersions, setGameVersions] = useState({});
    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;


    // TEST GRAPHIC
    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    // Données du graphique (initialement vide)
    const [chartData, setChartData] = useState([]);
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Stats de " + detailsPokemon.name // Titre dynamique avec le nom du Pokémon
        },
        axisX: {
            title: "Stats",
        },
        axisY: {
            title: "",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: chartData
        }]
    }


    const fetchPoke = async () => {
        try {
            const response = await PokemonServices.getSpeciesByID(id)
            // console.log(response.data);
            setDetailsPoke(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    const fetchPokemon = async () => {
        try {
            const response = await PokemonServices.getPokemonByID(id)

            // récupérer le type pour avoir les damages
            const res = await PokemonServices.getDamage(response.data.types[0].type.name);
            setDamage(res.data);
            setDetailsPokemon(response.data);
            // console.log(response.data.game_indices[0].version.name);
            setGameVersions(response.data);
            // console.log(response.data);

            // console.log(res.data);





            // Transformer les stats du Pokémon en données pour le graphique
            const statsData = response.data.stats.map(stat => ({
                y: stat.base_stat,  // Valeur de la stat
                label: stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1) // Nom de la stat, première lettre en majuscule
            }));

            // Mettre à jour le graphique avec les nouvelles données
            setChartData(statsData);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPokemon(); fetchPoke()
    }, [id]);





    return <Container className='d-flex flex-column align-items-center mt-3'>
        <h1>N°{detailsPoke.id} {detailsPoke.name}</h1>
        <div className='d-flex align-items-center gap-5'>
            <div>
                <div className='d-flex flex-column align-items-center mt-5 gap-5'>
                    <img className="mt-3" style={{ width: '20rem' }} src={"https://img.pokemondb.net/artwork/" + detailsPokemon.name + ".jpg"} alt="picturePokemon" />
                </div>
            </div>
            <div style={{ width: '30rem' }}>
                    <CanvasJSChart options={options} />
                </div>

            <div>
                <div className='d-flex align-items-center gap-5'>
                    <p >{detailsPoke.flavor_text_entries && detailsPoke.flavor_text_entries[16].flavor_text}</p>
                </div>
                <div className='d-flex align-items-center mt-3 gap-5'>


                    <p>Taille : {detailsPokemon.height}</p>
                    <p>Poids : {detailsPokemon.weight}</p>

                </div>
                <ul>
                        <p>Compétences :</p>
                        {detailsPokemon.abilities && detailsPokemon.abilities.map((ability) => {
                            return <li key={ability}>{ability.ability.name}</li>
                        })}
                    </ul>
                <div>
                    <h2>Types</h2>
                    {detailsPokemon.types && detailsPokemon.types.map((type) => {
                        return <button className={type.type.name} key={type}>{type.type.name}</button>
                    })}
                </div>
                <div className="mt-5">
                    <h2>
                        Faiblesses :
                    </h2>
                    {damage.damage_relations && damage.damage_relations.double_damage_from.map((damage) => {
                        return <li>{damage.name}</li>
                    })}
                    <h2>
                        Forces :
                    </h2>
                    {damage.damage_relations && damage.damage_relations.double_damage_to.map((damage) => {
                        return <li>{damage.name}</li>
                    })}
                </div>
            </div>
        </div>
        <h3>Game versions</h3>
        <div className="d-flex flex-wrap justify-content-center mt-3 mb-5 gap-2">
            {gameVersions.game_indices && gameVersions.game_indices.map((version) => {
                return <button className={version.version.name}>{version.version.name}</button>
            })}
        </div>
    </Container>
}

export default PokemonDetailsPage;