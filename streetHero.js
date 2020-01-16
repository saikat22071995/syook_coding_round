function superHero(a,x,y,moves){
    let markHeroes = function(a, x, y, moves) {
        if(x < 0 || x > a.length - 1 || y < 0 || y > a[x].length - 1) {
          return
        }
        if(visited[x][y] === true) {
          return 
        }
        visited[x][y] = true;
        console.log(moves.length)
       for(let i=0;i<moves.length;i++){
           if(moves[i]=='right'){
            markHeroes(a, x + 1, y, moves);
           } 
           if(moves[i]=='left'){
            markHeroes(a, x - 1, y, moves);
           }
           if(moves[i]=='up'){
            markHeroes(a, x, y + 1, moves);
           }
           if(moves[i]=='down'){
            markHeroes(a, x, y - 1, moves);
           }
       }
       
        // 
        // 
        // 
      };
      let visited = []
      for(let i = 0; i < a.length; i++) {
        visited[i] = []
      }
      let count = 0
      for(let x = 0; x < a.length; x++) {
        for(let y = 0; y < a[x].length; y++) {
         if(!visited[x][y]){
            markHeroes(a,x,y,moves)
            return visited
            
         }
          visited[x][y] = true
        }
      }
}

let superHeroes=[
    ['batman','spiderman','Avenger','Captain America','Jon Snow'],
    ['ken','chunLi','zanifeg','Sagat','M.Bision']
]
let x,y=0
let moves=['right','left','down']
console.log(superHero(superHeroes,x,y,moves))