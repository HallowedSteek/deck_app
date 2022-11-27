import React, { useEffect, useState } from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    _id: string;
    title: string;
    __v: number;
}



const DeckForm: React.FC = () => {

    const [decks, setDecks] = useState<Values[]>([]);

    async function handleClose(dekcId: string) {
        await fetch(`http://localhost:5000/decks/${dekcId}`, { method: "DELETE" });
        setDecks(decks.filter((deck: Values) => deck._id !== dekcId));

    }

    useEffect(() => {
        async function fetchDecks() {
            const response = await fetch("http://localhost:5000/decks");
            const newDecks = await response.json();
            setDecks(newDecks);
        }

        fetchDecks();
    }, [])

    return (

        <div className="home">
            <ul className='deck--grid'>
                {
                    decks.map((item: Values) => (
                        <li className='deck--grid--item' key={item._id}>{item.title.toUpperCase()}
                            <button onClick={() => handleClose(item._id)} className='close'></button>
                        </li>

                    ))
                }
            </ul>


            <Formik
                initialValues={{
                    _id: '',
                    title: '',
                    __v: 0,
                }}
                onSubmit={async (
                    values: Values,
                    actions: FormikHelpers<Values>,
                ) => {

                    const response = await fetch("http://localhost:5000/decks", {
                        method: "POST",
                        //🔽 specificam tipul valorilor trimise
                        headers: {
                            "Content-Type": "application/json",
                        },
                        //🔽 valorile trimise
                        body: JSON.stringify(
                            values,
                        ),
                    })

                    const deck = await response.json();

                    setDecks([...decks, deck]);

                    actions.resetForm();
                    actions.setSubmitting(false);

                }}
            >

                <Form className='deck--form'>
                    <label htmlFor="title" className='deck--form--title-label'>Deck title</label>
                    <Field id="title" className="deck--form--title--input" name="title" placeholder="My awesome deck" />

                    <button className='deck--form--submit' type="submit">Create Deck</button>
                </Form>

            </Formik>
        </div>




    )
}

export default DeckForm;