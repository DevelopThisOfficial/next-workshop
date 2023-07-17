import React from "react";
import styles from "./Bio.module.css";
import Image from "next/image";
import android from "./android.png";

function Bio() {
  return (
    <div className="section">
      <div className={styles.imageWrapper}>
        <Image
          src={android}
          fill={true}
          alt="Android admiring flowers"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className={styles.bioText}>
        <h2 className="sectionTitle">Welcome</h2>
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
