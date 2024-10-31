import Image from 'next/image';
import Link from 'next/link';
import styles from './Sponsors.module.css';

const sponsorsData = [
  { id: 1, name: 'SolidWorks', logo: '', url: 'https://solidworks.com', tier: 'bronze' },
  { id: 2, name: 'Altium', logo: '/images/sponsor1.png', url: 'https://altium.com', tier: 'gold' },
  { id: 3, name: 'Ansys', logo: '', url: 'https://ansys.com', tier: 'silver' },
];

const Sponsors = () => {
  return (
    <div className={styles.sponsorsContainer}>
      <h2 className={styles.title}>Sponsors</h2>
      <div className={styles.sponsorsGrid}>
        {sponsorsData.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.id} passHref target="_blank" rel="noopener noreferrer">
            <div className={`${styles.sponsor} ${styles[sponsor.tier]}`}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={100}
                className={styles.logo}
              />
              <span className={styles.name}>{sponsor.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
