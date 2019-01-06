import React from 'react';

//const Ninjas = (props) => { //same as below
    const Ninjas = ({ninjas, deleteNinja}) => {

         //const {ninjas} = props; 

         /*
        const ninjaList = ninjas.map(ninja => {
            if (ninja.age > 20)
            {
                return (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                    </div>
                )
            }
            else{
                return null;
            }
        })
        */


       const ninjaList = ninjas.map(ninja => {
           return (ninja.age > 25) ? (<div className="ninja" key={ninja.id}>
               <div>Name: { ninja.name }</div>
               <div>Age: { ninja.age }</div>
               <div>Belt: { ninja.belt }</div>
               <br/>
               <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
           </div>  ) : (null)
        }
       );

        return(
            <div className="ninja-list">
                {ninjaList}
            </div>              
            
        );
}

export default Ninjas;
