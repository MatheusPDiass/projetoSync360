function salvar() {
  const userName = document.getElementById("userName");
  const userAge = document.getElementById("userAge");
  const userAdress = document.getElementById("userAdress");
  const userBio = document.getElementById("userBio");

  const formName = document.getElementById("formName").value;
  const formAge = document.getElementById("formAge").value;
  const formStreet = document.getElementById("formStreet").value;
  const formNeighborhood = document.getElementById("formNeighborhood").value;
  const formState = document.getElementById("formState").value;
  const formUserBio = document.getElementById("formBio").value;

  const confirmation = confirm("Deseja atualizar as informações?");

  if (confirmation) {
    userName.innerText = formName;
    userAge.innerText = formAge + " anos";
    userAdress.innerText =
      formStreet + ", " + formNeighborhood + "/" + formState;
    userBio.innerText = formUserBio;

    document.getElementById("formName").value = "";
    document.getElementById("formAge").value = "";
    document.getElementById("formStreet").value = "";
    document.getElementById("formNeighborhood").value = "";
    document.getElementById("formState").value = "";
    document.getElementById("formBio").value = "";
  } else {
  }
}
