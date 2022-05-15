function solve(input){

    let arrOfGames = input.shift().split(` `);
    let command = input.shift();

    while(command !== 'Play!' ){

        let [move,game,expansion] = command.split(` `);
        
        switch (move) {
            case `Install`:
                if(arrOfGames.includes(game) == false){
                    arrOfGames.push(game);
                }
                break;
        
            case `Uninstall`:
                if(arrOfGames.includes(game) == true){
                    let index = arrOfGames.indexOf(game);
                    arrOfGames.splice(index,1);
                }

                break;

                case `Update`:
                    if(arrOfGames.includes(game) == true){
                        let index = arrOfGames.indexOf(game);
                        arrOfGames.splice(index,1);
                        arrOfGames.push(game);
                    }

                break;

                case `Expansion`:
                  let newGame=  game.split(`-`);
                    if(arrOfGames.includes(newGame[0])){
                    let index = arrOfGames.indexOf(newGame[0]);
                    let expansionedGame = newGame.join(`:`);
                        arrOfGames.splice(index + 1,0,expansionedGame);
                        
                        
                        
                    }



                break;
        }
        command = input.shift();
    }
    console.log(arrOfGames.join(` `));
}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);

solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])