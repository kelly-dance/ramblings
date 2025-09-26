import { h } from "./h";

export function App() {

	const img = <img
		src="self.jpg"
		alt="Photo of Kelly Dance"
		style={{
			width: "180px",
			height: "180px",
			borderRadius: "50%",
			objectFit: "cover",
			marginBottom: "1.5rem",
		}}
		onClick={()=>{
			img.src="baursak.png"
			img.onload = () => img.style.borderRadius = "0%";
		}}
	/>

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "600px",
        margin: "4rem auto",
        textAlign: "center",
        lineHeight: 1.6,
      }}
    >
      {img}
      <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
        Kelly Dance
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        Graduate student in Combinatorics & Optimization at the University of Waterloo,
				with interests in algorithms, combinatorial optimization, and graph theory.
      </p>
    </main>
  );
}

document.body.appendChild(App());
