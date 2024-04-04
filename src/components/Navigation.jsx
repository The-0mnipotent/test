import React from "react";
import {
  FaChartBar,
  FaDatabase,
  FaInfoCircle,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-list">
        <h3 className="list-heading underline">Menu</h3>
        <ul>
          <li>
            <FaInfoCircle />
            <Link to="/" className="nav-link">
              Introduction
            </Link>
          </li>
          <li>
            <FaChartBar />
            <Link to="/" className="nav-link">
              Sample Output
            </Link>
          </li>
          <li>
            <FaChartBar />
            <Link to="/" className="nav-link">
              Expected Server Performance
            </Link>
          </li>
          <li>
            <FaDatabase />
            <Link to="/" className="nav-link">
              Datasets
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation-list">
        <h3 className="list-heading underline">Citation</h3>
        <ul>
          <li>
            <FaInfoCircle />
            <Link to="/" className="nav-link">
              Partner-Aware Prediction of Interacting Residues
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation-list">
        <h3 className="list-heading underline">Contact</h3>
        <ul>
          <li>
            <FaUserFriends />
            <Link to="/" className="nav-link">
              Shandar Ahmad
            </Link>
          </li>
          <li>
            <FaUserFriends />
            <Link to="/" className="nav-link">
              Arpit Singh
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
