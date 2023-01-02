// Tablifier LITE
// Version 1.1
// Copyright (c) 2023 Alex Chalk / todistantlands
// Hosted at github.com/todistantlands/tablifier

class Table {
	static separator = ": ";
	static db = { count: 0 };

	constructor(list, name = false) {
		this.name = name;
		this.list = Table.tablify(list);//nodeList
		return this;
	}
	
	// Methods
	static tablify(element) {
		element.normalize();
		console.log('Tablifying ',element, ', tag name ', element.tagName);
		let arr = [];
		for (let x of element.children) {
			console.log('Inspecting child ',x, ', tag name', x.tagName);
			switch (x.tagName) {
				case "LI":
					if (x.childElementCount == 0) {
						console.log('Pushing child element ', x)
						arr.push(x.textContent.trim());
					} else {
						let newTableName = false, i = x.firstChild;
						do {
							console.log('Inspecting child node ',i,' of ',x);
							if (i && (i.nodeName == "#text")) {
								console.log('Found text node: ',i.textContent.trim());
								!!(i.textContent.trim()) && (newTableName = i.textContent.trim());
							}
							i = i.nextSibling;
						} while (!newTableName || i);
						arr.push(new Table(x,newTableName));
					}
					break;
				case "TABLIFY": case "DIV": case "UL": case "OL":
					!!(x.childElementCount) && (arr = Table.tablify(x));
					break;
			}
		}
		return arr;
	}

	pull() {
		let len = this.list.length;
		let list = this.list;
		let e = list[Math.floor(Math.random() * len)];
		if (e instanceof Table) {
			return ("" + ((e.name && e.name + Table.separator )|| "") + e.pull());
		} else return e;
	}

	print(ref = this._ref) {
		document.querySelector("#"+ref+"_readout").innerHTML = this.pull();
	}
}

window.onload = (event) => {
	let db = Table.db;
	document.normalize();
	document.querySelectorAll("tablify, .random-table").forEach(
		function(node) {
			let id;
			if (!node.id) {
				node.id = "_UNASSIGNED_"+(++db.count);
			}
			id = node.id;
			
			db[id] = new Table(node);
			let target = db[id];
			target._ref = id;
			let button = document.createElement("p").appendChild(document.createElement("button"));
				button.setAttribute("onclick","Table.db.".concat(id,".print()"))
				button.appendChild(document.createTextNode("Pull"));
			let span = document.createElement("span");
				span.setAttribute("id",id.concat("_readout"));
			node.insertAdjacentElement('afterend',document.createElement("p"))
				.appendChild(button)
				.insertAdjacentElement('afterend',span);
		}
	);
};

/*
MIT License

Copyright (c) 2023 Alex Chalk / todistantlands

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/