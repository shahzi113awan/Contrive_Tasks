import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Modals(props) {
  const [show, setShow] = useState(false);
  const [allUsersSearch, setAllUsersSearch] = useState("");
  const [activeUsersSearch, setActiveUsersSearch] = useState("");
  const [allUserData, setallUserData] = useState([]);
  const [activeUserData, setactiveUserData] = useState([]);
  const [openDataModal, setOpenDataModal] = useState(false);
  const [openActiveModal, setOpenActiveModal] = useState(false);

  const filteredAllUsers = allUserData.filter(
    (_) =>
      _.name.toLowerCase().includes(allUsersSearch) ||
      _.email.toLowerCase().includes(allUsersSearch) ||
      _.status.toLowerCase().includes(allUsersSearch)
  );

  const filteredActiveUsers = activeUserData.filter(
    (_) =>
      _.name.toLowerCase().includes(activeUsersSearch) ||
      _.email.toLowerCase().includes(activeUsersSearch) ||
      _.status.toLowerCase().includes(activeUsersSearch)
  );

  const fetchData = async () => {
    const result = await axios.get("/api/Users");
    setallUserData(result.data);
  };
  const fetchActiveData = async () => {
    const result = await axios.get("/api/activeUsers");
    setactiveUserData(result.data);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            className="mr-2"
            variant="secondary"
            onClick={(e) => {
              fetchData(e) && setOpenDataModal(true);
            }}
          >
            All Users
          </Button>

          <Modal show={openDataModal}>
            <Modal.Body>
              <input
                type="text"
                value={allUsersSearch}
                onChange={(e) =>
                  setAllUsersSearch(e.target.value.toLowerCase())
                }
                autoFocus
              />
              {allUserData &&
                filteredAllUsers.map((data) => {
                  return (
                    <div>
                      {data.name} {data.status}
                    </div>
                  );
                })}
            </Modal.Body>
            <Button
              variant="secondary"
              onClick={(e) => {
                setOpenDataModal(false);
              }}
            >
              Close
            </Button>
          </Modal>

          <Button
            variant="secondary"
            style={{ margingLeft: "6%" }}
            onClick={(e) => {
              fetchActiveData(e) && setOpenActiveModal(true);
            }}
          >
            Active Users
          </Button>
          <Modal show={openActiveModal}>
            <Modal.Body>
              <input
                type="text"
                value={activeUsersSearch}
                onChange={(e) => setActiveUsersSearch(e.target.value)}
                autoFocus
              />
              {filteredActiveUsers?.map((data) => {
                return (
                  <div>
                    {data.name} {data.status}
                  </div>
                );
              })}
            </Modal.Body>
            <Button
              variant="secondary"
              onClick={(e) => {
                setOpenActiveModal(false);
              }}
            >
              Close
            </Button>
          </Modal>
        </Modal.Body>
        <Modal.Footer>
          {/* <input type="radio"/>  */}
          <Button variant="secondary" onClick={props.handleCloser}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={props}>
              Save Changes
            </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
