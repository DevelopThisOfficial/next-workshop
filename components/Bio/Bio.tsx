import React from "react";
import styles from "./Bio.module.css";
import Image from "next/image";

function Bio() {
  return (
    <div className={`section ${styles.bioSection}`}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://picsum.photos/300"
          fill={true}
          style={{
            objectFit: "contain",
          }}
          alt="Random image from picsum.photos"
        />
      </div>

      <div className={styles.bioText}>
        <h2 className="sectionTitle">About Me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          dolorem laborum repellat illo minima corrupti at aperiam est. Earum
          esse inventore consectetur fugiat dignissimos officia quasi veniam
          expedita quibusdam praesentium ipsa ipsam ab quae, aperiam saepe hic,
          eos ipsum tempora voluptates nostrum ullam adipisci vel optio sunt.
          Quas, sed rem.
        </p>
      </div>
    </div>
  );
}

export default Bio;
