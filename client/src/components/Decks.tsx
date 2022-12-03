import React, { useEffect, useState } from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { useParams } from 'react-router-dom'

import { Values } from '../api/config';

import createCard from '../api/createCard';
import getDeck from '../api/getDeck';
import deleteCard from '../api/deleteCard';




const Decks: React.FC = () => {

    const [deck, setDeck] = useState<Values | undefined>()
    const [cards, setCards] = useState<string[]>([]);

    const { deckId } = useParams();



    async function handleDeleteCard(index: string) {
        if(!deckId) return
        const somn = await deleteCard(deckId, index);
        setCards(somn.cards);
    }

    useEffect(() => {
        async function fetchDeck() {
            if (!deckId) return
            const newDeck = await getDeck(deckId)
            setDeck(newDeck);
            setCards(newDeck.cards);
        }
        
       fetchDeck();
        
    }, [deckId])

    return (

        <div className="home">

            <div className="main-title">{deck?.title.toUpperCase()}</div>

            <ul className='deck--grid'>
                {
                    cards.map((item, index: number) => (
                        <li className='deck--grid--item' key={index}>
                            <p>{item}</p> 
                            <button onClick={() => handleDeleteCard(index.toString())} className='close'></button>
                        </li>
                    ))
                }
            </ul>


            <Formik
                initialValues={{
                    _id: '',
                    title: '',
                    text: '',
                    cards: [''],
                    __v: 0,
                }}
                onSubmit={async (values: Values, actions: FormikHelpers<Values>) => {



                    const { cards: serverCards } = await createCard(values, deckId!);

                    setCards(serverCards);


                    actions.resetForm();
                    actions.setSubmitting(false);

                }}
            >

                <Form className='deck--form'>
                    <label htmlFor="text" className='deck--form--title-label'>Card text</label>
                    <Field id="text" className="deck--form--text--input" name="text" placeholder="My awesome card" />

                    <button className='deck--form--submit' type="submit">Create Card</button>
                </Form>

            </Formik>
        </div>




    )
}

export default Decks;