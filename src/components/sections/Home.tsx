"use client"

import { LOCAL_STORAGE_KEYS } from "@/config/contants";

export const HomeSection = () => {
    // const [presentationValues] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION)

    const data = window?.localStorage.getItem(LOCAL_STORAGE_KEYS.PRESENTATION)
    const dataParsed = JSON.parse(data || '{}')

    console.log({ dataParsed });

    if (!dataParsed) return (<div>no hay data</div>)

    return (
        <div>
            {dataParsed.name} {dataParsed.surname}

            <p>
                {dataParsed.summary}
            </p>
        </div>
    )
}
