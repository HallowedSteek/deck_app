import React, { useEffect, useState } from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
    _id?:string;
    title: string;
}


const DeckForm: React.FC = () => {

    const [decks, setDecks] = useState([]);


    useEffect(() => {
        async function fetchDecks() {
            const response = await fetch("http://localhost:5000/decks");
            const newDecks = await response.json();
            setDecks(newDecks);

        }
        fetchDecks();
    }, [])

    console.log(decks)
    
  
    
    return (

        <div className="home">

        {
            decks.map((item:Values)=>(
                <h1 key={item._id}>{item.title}</h1>
            ))
        }


              <Formik
            initialValues={{
                title: '',
            }}
            onSubmit={async (
                values: Values,
                actions: FormikHelpers<Values>,
            ) => {

                await fetch("http://localhost:5000/decks", {
                    method: "POST",

                    //🔽 specificam tipul valorilor trimise
                    headers: {
                        "Content-Type": "application/json",
                    },

                    //🔽 valorile trimise
                    body: JSON.stringify(
                        values,
                    ),
                });

                actions.resetForm();
                actions.setSubmitting(false);


            }}
        >

            <Form className='deck--form'>
                <label htmlFor="title">Deck title</label>
                <Field id="title" name="title" placeholder="My awesome deck" />

                <button className='deck--form--submit' type="submit">Submit</button>
            </Form>

        </Formik>
        </div>

      


    )
}

export default DeckForm;