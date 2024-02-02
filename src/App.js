import { useState } from 'react';
function App() {

  let [set, sset] = useState();
  let [aset, asset] = useState();
  let [ans, setans] = useState([]);
  let array = [],array1=[],slotearry = [],fm=[],sm=[];
  let hslot, mslot, tslot,h,m;

  const slot = () => {
    array = set.split(':');
    array1 = aset.split(':');

    fm=array[1].split('');
    sm=array1[1].split('');
    
    if (parseInt(array[0]) > parseInt(array1[0])) {

      h = parseInt(array[0]) - parseInt(array1[0]);
      h = 12 - h;
      if (parseInt(array[0]) == parseInt(array1[0])) {
        h = 0;
      }
    } else {
      h = (parseInt(array1[0]) - parseInt(array[0]));
    }
    m = Math.abs(array1[1] - array[1]);
    hslot = (h * 6);
    mslot = (m / 10);
    tslot = mslot + hslot;

     if(fm[1]!=sm[1]){
        tslot=tslot+1;
        if(parseInt(array[1])>parseInt(array1[1])){
          tslot=tslot-1;
        }
      }
    

    for (var i = 0; i <= tslot; i++) {
      slotearry[i] = array[0] + ":" + array[1];

      if (array[0] == 12 && array[1]==50) {
        array[0] =0 ;
      }

      array[1] = parseInt(array[1]) + parseInt(10);
       
      if (array[1] >= 60) {
        array[1] = array[1] - 60;
        array[0] = parseInt(array[0]) + parseInt(1);
        if (array[1] <= 9) {
          array[1] = "0" + array[1];
        }

      }
    }

    setans(slotearry);
  }

  return (
    <>
      <input type="text" placeholder="Enter Time" onChange={(e) => sset(e.target.value)}></input><br></br>
      <input type="text" placeholder="Enter Time" onChange={(e) => asset(e.target.value)}></input><br></br>
      <input type='button' value="slot" onClick={slot}></input>
      <table border={1}>
        <thead>
          <tr>
            <th>Total Slots</th>
          </tr>
        </thead>
        <tbody>
          {
            ans.map((ele, ind) => {
              return (
                <tr>
                  <td key={ind}>{ele}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
