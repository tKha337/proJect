import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row   ">
                    <div className="col-4 ">
                        <div className="card h-100">
                            <img
                                className="card-img-top"
                                src="http://placehold.it/500x325"
                                alt
                            />
                            <div className="card-body">
                                <h4 className="card-title text-primary">Card title</h4>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente esse necessitatibus neque.
                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="card h-100">
                            <img
                                className="card-img-top"
                                src="http://placehold.it/500x325"
                                alt
                            />
                            <div className="card-body">
                                <h4 className="card-title text-primary">Card title</h4>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo magni sapiente, tempore debitis beatae culpa natus
                                    architecto.
                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="card h-100">
                            <img
                                className="card-img-top"
                                src="http://placehold.it/500x325"
                                alt
                            />
                            <div className="card-body">
                                <h4 className="card-title text-primary">Card title</h4>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente esse necessitatibus neque.
                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
