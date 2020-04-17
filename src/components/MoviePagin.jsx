import React, { Component } from 'react';

class MoviePagin extends Component {
    render() {
        const { onNextButtonClick, onPrevButtonClick } = this.props;
        const { currentPage, totalPages } = this.props;
        const isPrevButtonDisabled = currentPage === 1 ? 'disabled' : '';
        const isNextButtonDisabled =
            currentPage === totalPages ? 'disabled' : '';
        return (
            <nav
                aria-label="Page navigation"
                className="d-flex justify-content-between"
            >
                <ul className="pagination">
                    <li className={`page-item ${isPrevButtonDisabled}`}>
                        <span className="page-link" onClick={onPrevButtonClick}>
                            Previous
                        </span>
                    </li>
                    <li className={`page-item ${isNextButtonDisabled}`}>
                        <span className="page-link" onClick={onNextButtonClick}>
                            Next
                        </span>
                    </li>
                </ul>
                <h4>
                    page {currentPage} of {totalPages}
                </h4>
            </nav>
        );
    }
}

export default MoviePagin;