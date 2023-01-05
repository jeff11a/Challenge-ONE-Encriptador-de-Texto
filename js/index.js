"use strict";

const vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const tar = document.querySelector(".ta-r");
const ta = document.querySelector(".ta");
const imgd = document.querySelector(".img-d");
const btne = document.querySelector("#btn-e");
const btnd = document.querySelector("#btn-d");
const copy = document.querySelector(".copy");

btne.addEventListener("click", encriptar);
btnd.addEventListener("click", desencriptar);
copy.addEventListener("click", copiar);

function encriptar() {
  const vacio = sinTexto();
  if (vacio.length > 0) return alert(vacio);
  ocultar_mostrar();
  const texto = ta.value;

  let textoEncriptado = texto;
  let i = 1;

  for (const [k, v] of Object.entries(vocales)) {
    const regex = /k/g;
    textoEncriptado = textoEncriptado.replaceAll(k, v);
    textoEncriptado = textoEncriptado.replaceAll(v, i);
    i++;
  }

  let j = 1;
  for (const [k, v] of Object.entries(vocales)) {
    textoEncriptado = textoEncriptado.replaceAll(j, v);
    j++;
  }

  tar.value = textoEncriptado;
}

function desencriptar() {
  const vacio = sinTexto();
  if (vacio.length > 0) return alert(vacio);
  ocultar_mostrar();
  const texto = ta.value;

  let textoEncriptado = texto;
  for (const [k, v] of Object.entries(vocales)) {
    textoEncriptado = textoEncriptado.replaceAll(v, k);
  }
  tar.value = textoEncriptado;
}

function copiar() {
  navigator.clipboard.writeText(tar.value);
  alert("Texto en el portapapeles");
}

function ocultar_mostrar() {
  tar.style.display = "inline-block";
  imgd.style.display = "none";
  copy.style.display = "flex";
}

function sinTexto() {
  if (ta.value == "") {
    return "Sin texto";
  } else {
    return "";
  }
}
