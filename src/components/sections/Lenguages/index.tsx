'use client'

import { FormLenguages, Lenguage, Lenguages } from "@/components/forms/FormLenguages";
import { TrashIcon } from "@/components/icons/trash-icon";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";


export const LenguagesSection = () => {
  const [lenguages, setLenguages] = useLocalStorage(
    LOCAL_STORAGE_KEYS.LANGUAGE
  );


  const onDeleteLeguange = (id: string) => {
    
    setLenguages((oldData: Lenguages) => ({
      ...oldData,
      lenguages: oldData.lenguages.filter((education: Lenguage) => education.id !== id)
    }));
  }



  return (
    <section>
      <div className="my-5">
        <div className="flex gap-5 my-5">
          {!lenguages ?? <div> No hay idiomas </div>}

          <div className="flex gap-5 w-full">
            {lenguages &&
              lenguages.lenguages.map((lenguage: Lenguage) => {
                return (
                  <div
                    key={lenguage.id}
                    className="flex items-start justify-between gap-2 shadow-ij-m rounded p-4 w-full"
                  >
                    <div>
                      <h4 className="text-black/80">
                        {lenguage.lenguage_name}
                      </h4>
                      <p className="text-black/60">{lenguage.level}</p>
                    </div>

                    <button
                      
                      className="text-error font-bold flex items-center gap-1"
                    >
                      <TrashIcon />
                      Eliminar
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        <FormLenguages />
      </div>
    </section>
  );
};
