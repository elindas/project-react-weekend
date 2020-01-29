import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card, CardImg, Container, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function GetCard() {
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [inputModal, setInputModal] = useState("")
    const [modal, setModal] = useState(false);
    const [idUser, setIdUser] = useState()

    const toggle = id => {
        setModal(!modal);
        setIdUser(id);
    };

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://5e3139d0576f9d0014d644ed.mockapi.io/projectreact')
            .then(res => {

                console.log("this is response", res)

                if (res.status === 200) {
                    const data = res.data;
                    setData(data)
                }
            })
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await axios.post("http://5e3139d0576f9d0014d644ed.mockapi.io/projectreact", {
            name: input
        })

        setInput("")

        await getData()
    }

    const handleDelete = async id => {
        console.log('id', id)

        await axios.delete(`http://5e3139d0576f9d0014d644ed.mockapi.io/projectreact/${id}`)
        await getData()
    }

    const handleChangeModal = e => {
        setInputModal(e.target.value);
    };

    const handleEdit = async () => {
        // console.log("masuk");
        console.log("id", idUser);
        // const newName = prompt(`edit nama ${name}`);
        console.log("input modal", inputModal);
        const id = idUser;
        await axios.put(
            `http://5e3139d0576f9d0014d644ed.mockapi.io/projectreact/${id}`,
            {
                name: inputModal
            }
        );
        // console.log("put", put);
        toggle();
        await getData();
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add name" onChange={handleChange} value={input} />
                <button type="submit">Add</button>
            </form>

            <Container
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
            >
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Card
                                style={{
                                    width: "200px",
                                    alignItems: "center"
                                }}
                            >
                                <CardImg
                                    top
                                    style={{ width: "100px" }}
                                    src={item.avatar}
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>{item.id}</CardTitle>
                                    <CardSubtitle>{item.name}</CardSubtitle>
                                    <CardSubtitle>{item.country}</CardSubtitle>
                                    <CardSubtitle>{item.city}</CardSubtitle>
                                    <Button onClick={() => toggle(item.id)}>Edit</Button>
                                    <Button className="ml-2"
                                        onClick={() => handleDelete(item.id)}
                                        style={{ background: "red" }}
                                    >
                                        Delete
                  </Button>
                                </CardBody>
                            </Card>
                        </React.Fragment>
                    );
                })}
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Edit sesuatu</ModalHeader>
                <ModalBody>
                    <input
                        placeholder="edit disini"
                        onChange={handleChangeModal}
                        value={inputModal}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => handleEdit()}>
                        Edit
          </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
          </Button>
                </ModalFooter>
            </Modal>


        </div>
    )
}
