const orders = {
  function: {
    addColumns: {
      columnsToAdd: ["imie", "nazwisko"],
      resultingColumn: "imieZnazwiskiem"
    }
  }
};





if (orders.function === addColumns) {
    console.log("logic");
}


switch (orders.function){
    case addColumns:
        return (console.log("logic"))
}