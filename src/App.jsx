import React from 'react';
import incidentsByYear from './assets/incidents_by_year.png';
import topCountries from './assets/top_countries.png'; 
import meansOfAttack from './assets/attack_means.png';
import './index.css'; 


function App() {
  return (
    <>
      {/* Top bar with site title */}
      <header className="header">
        <div className="site-title">Humanitarian Attack Analysis</div>
        <div className="top-bar">
          <i className="bx bx-menu" id="menu-icon"></i>
          <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#data">Data</a>
            <a href="#methodology">Methodology</a>
            <a href="#results">Results</a>
            <a href="#visualizations">Visualizations</a>
            <a href="#gallery">Gallery</a>
          </nav>
          <i className="bx bx-search" id="search-icon"></i>
        </div>
      </header>
      
      {/* Home Page Section */}
      <section id="home" className="hero">
        <h1>Humanitarian Attack Analysis</h1>
        <p>We use statistical learning to detect mental health signals and explain patterns behind user language.</p>
        <a href="#findings" className="btn">Explore Our Findings</a>
        <a href="#data" className="scroll-down">⬇️ Scroll to explore</a>
      </section>

       {/* Data Description Section */}
      <section id="data" className="description">
        <h2>Data Analysis</h2>
        <div className="underline"></div>
        <p>
          The dataset contains records of humanitarian security incidents from 1997.
          Each row represents an incident and includes fields such as:
        </p>
        <div className="underline"></div>
        <ul>
          <li><strong>Incident ID:</strong> Unique identifier for each incident.</li>
          <li><strong>Year, Month, Day:</strong> Date information of the incident.</li>
          <li><strong>Country, Region, District, City:</strong> Geographical location.</li>
          <li><strong>Organizations affected:</strong> UN, INGO, ICRC, etc.</li>
          <li><strong>Casualties and Affected People:</strong> Nationals and internationals killed, wounded, kidnapped, and totals.</li>
          <li><strong>Means of Attack:</strong> e.g., Shooting, Kidnapping, Ambush.</li>
          <li><strong>Attack Context:</strong> e.g., raid, crossfire, individual attack.</li>
          <li><strong>Location:</strong> Latitude and Longitude coordinates.</li>
          <li><strong>Actor Information:</strong> Perpetrators' type and name.</li>
          <li><strong>Details:</strong> Brief description of the incident.</li>
        </ul>
        <p>
          This dataset provides critical insights into the threats faced by humanitarian workers and the nature of attacks they encounter worldwide.
        </p>
      </section>

      {/* Chart Section */}
      <section className="chart-section">
        <h2>Yearly Incident Overview</h2>
        <img src={incidentsByYear} alt="Incidents by Year Chart" />
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="description">
          <h2>METHODOLOGY</h2>
          <div className="underline"></div>
          <p>
            This section outlines our data collection and analysis process, from gathering and cleaning the data to conducting exploratory analyses.
          </p>
          <div className="underline"></div>

          <p className="bold-paragraph">
            Our analysis of humanitarian security incidents followed a systematic approach. We began by gathering data from publicly available sources, including annual reports and field documentation covering incidents from 1997 onward.
          </p>

          <p className="bold-paragraph">
            The dataset includes detailed information such as incident date, location, means of attack, and casualties. We then conducted a rigorous data cleaning process, addressing missing values and standardizing variables to ensure consistency across records.
          </p>

          <p className="bold-paragraph">
            Exploratory data analysis was performed to understand temporal and regional distributions of incidents, supported by summary statistics and visualizations. Furthermore, we examined categorical variables, such as attack types, affected populations, and perpetrator groups, to identify significant trends and patterns.
          </p>

          <p className="bold-paragraph">
            Using geospatial data, we mapped incident locations to visualize hotspots and gain insight into the geographical distribution of attacks. Finally, we created a suite of visualizations, including bar charts, line graphs, and maps, to effectively communicate our findings. This comprehensive methodology ensures a transparent and evidence-based analysis that informs humanitarian efforts and enhances safety protocols.
          </p>
        </section>

      {/* Results Section */}
      <section id="results" className="description">
      <h2>MODEL PERFORMANCE & EXPLAINABILTY</h2>
      <div className="underline"></div>
        <p>
          This section highlights the most affected countries and prevalent attack types, summarizing the key findings from our humanitarian security incident analysis.
        </p>
        <div className="underline"></div>

      <p className="bold-paragraph">
          This bar chart shows the top 10 countries with the highest number of humanitarian security incidents in the dataset. Afghanistan and South Sudan recorded the highest number of incidents, each exceeding 500 cases, indicating that these countries have been particularly affected by humanitarian security challenges. Other countries, such as Sudan, the Syrian Arab Republic, Somalia, the Democratic Republic of Congo, the Occupied Palestinian Territories, the Central African Republic, Mali, and Pakistan, also exhibit significant incident counts, albeit at a lower level. 
          This distribution highlights the geographical concentration of incidents, helping to prioritize areas for further analysis and response.
        </p>

      </section>

      <section className="chart-section">
        <h2>Top 10 Countries with most incidents</h2>
        <img src={topCountries} alt="Top 10 Countries with Most Incidents" />
      </section>

      <section id="results" className="description">
      <p className="bold-paragraph">
          This bar chart shows the distribution of different means of attack in humanitarian security incidents. Shooting is by far the most common, followed by kidnapping and bodily assault. Other means of attack, such as IEDs, shelling, and other explosives, occur much less frequently. 
          This highlights that most incidents involve direct human violence rather than more complex or indirect attack methods.
        </p>
         </section>

        <section className="chart-section">
        <h2>Distribution of Means of Attack</h2>
        <img src={meansOfAttack} alt="Distribution of Means of Attack" />
      </section>

      {/* Visualizations Section */}
      <section id="visualizations" className="description">
        <h2>VISUALIZATIONS & INTERACTIVE INSIGHTS</h2>
      <div className="underline"></div>
        <p>
          This section presents interactive and static visualizations of humanitarian security incidents. 
    It includes dynamic word clouds, geospatial incident maps, and bar charts that reveal the frequency of different attack types, enabling a comprehensive understanding of the data and trends. 
    These visualizations provide an intuitive and engaging way to explore the data and identify patterns that inform humanitarian responses.
        </p>
        <div className="underline"></div>
      </section>

      <section className="chart-section">
      <h2>Security Incidents Interactive Map</h2>
      <iframe
        src="/assets/security_incidents_map.html"
        width="70%"
        height="600px"
        title="Security Incidents Map"
        style={{ border: 'none' }}
      ></iframe>
      <p className="bold-paragraph">
        This interactive map allows users to explore humanitarian security incidents, including details on country, attack type, and casualty counts.
      </p>
    </section>

    </>
  );
}

export default App;