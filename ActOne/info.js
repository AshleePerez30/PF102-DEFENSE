const leftDiv = (t1, t2, p1, p2, b1, b2, b3, b4) => {
    let div = document.createElement("div")
    div.className = "classLeft"
    div.innerHTML = `<h1>${t1}</h1>
                     <p>${p1}</p>
                     <h1>${t2}</h1>
                     <p>${p2}</p>
                     <button><a href="https://myheroacademia.fandom.com/wiki/Yuga_Aoyama"></a>${b1}</button>
                     <button><a href="https://myheroacademia.fandom.com/wiki/Yuga_Aoyama#Personality"></a>${b2}</button>
                     <button><a href="https://myheroacademia.fandom.com/wiki/Yuga_Aoyama#Abilities"></a>${b3}</button>
                     <button><a href="https://myheroacademia.fandom.com/wiki/Yuga_Aoyama#Equipment"></a>${b4}</button>
    `
    return div
}

export {leftDiv}
