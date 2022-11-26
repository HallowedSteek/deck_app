import React from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
    title: string;
}


const DeckForm = () => {
    return (

        <Formik
            initialValues={{
                title: '',
            }}
            onSubmit={async ( 
                values: Values,
                actions: FormikHelpers<Values>,
            ) =>  {

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

    )
}

export default DeckForm;