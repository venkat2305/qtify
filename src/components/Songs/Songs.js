import { Tabs, Tab, Box } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/Section'

function CustomTabPanel({ children, value, index, getSongsByGenere, allSongsData, genere, ...other }) {
    const data = getSongsByGenere(genere, allSongsData)
    // console.log(data)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                >
                    <Section cardData={data} title={genere} likesCount={data.likes} hideHeader />
                </Box>
            )}
        </div>
    );
}

export default function Songs() {

    const [value, setValue] = useState(0);

    const [allSongsData, setAllSongsData] = useState([])
    const [allTabsData, setAllTabsData] = useState([])
    // const [rockSongsData, setRockSongsData] = useState([])
    // const [popSongsData, setPopSongsData] = useState([])
    // const [jazzSongsData, setJazzSongsData] = useState([])
    // const [bluesSongsData, setBluesSongsData] = useState([])

    const getSongsData = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/songs")
            setAllSongsData(response.data)
            // console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // https://qtify-backend-labs.crio.do/genres
    const getGenereTabsData = async (genere) => {
        try {
            const response = await axios.get(`https://qtify-backend-labs.crio.do/genres`)
            response.data.data.unshift({ label: "All", key: "all" })
            // console.log(response.data.data)
            setAllTabsData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getSongsByGenere = (genere, allSongsData) => {
        if(genere === "all") return allSongsData
        return allSongsData.filter(song => {
            return song.genre.key === genere
        })
    }


    useEffect(() => {
        getSongsData()
        getGenereTabsData()
    }, [])

    return (
        <Box>
            <Tabs value={value} onChange={(event, newValue) => {
                setValue(newValue)
                // console.log(newValue)
            }}>
                {allTabsData.map((genere, index) => (
                    <Tab key={index} label={genere.label} sx={{color : "white"}} />
                ))}
            </Tabs>

            {
                allTabsData.map((genere, index) => (
                    <CustomTabPanel
                        value={value}
                        index={index}
                        getSongsByGenere={getSongsByGenere}
                        allSongsData={allSongsData}
                        genere={genere.key}
                    >
                        {genere.key}
                    </CustomTabPanel>
                ))
            }
        </Box>
    )
}