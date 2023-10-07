let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

 for( let x = 0; x<pronoun.length;x++ ){
    let dato_x = pronoun[x];
    for(let y=0; y<adj.length; y++){
      let dato_y=adj[y]
      for(let z=0; z<noun.length; z++){
        let dato_z=noun[z]
        console.log(dato_x+dato_y+dato_z+".com")
      }

    }
 }