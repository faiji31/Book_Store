const getStoredbook=()=>{
 const storedbookSTR = localStorage.getItem('readList');

 if (storedbookSTR) {
      const stroredbookData = JSON.parse(storedbookSTR);
      return stroredbookData;
 }
 else{
      return[];
 }
}

const addtostoredDB=(id)=>{
      const stroredbookData = getStoredbook();
      if (stroredbookData.includes(id)){
            alert("This Book is Alredy exist")
      }
      else{
            stroredbookData.push(id)
            const data = JSON.stringify(stroredbookData);
            localStorage.setItem("readList",data)
      }


}

export {addtostoredDB}