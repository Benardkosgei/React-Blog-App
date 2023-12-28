import React from 'react';
const Contact = ({ data }) => {
  // Your component logic for the contact page
  return (
    <div className="container my-4 border border-info my-2 pb-4">
        <div className='bg-info p-2 mb-3'>
        <h1 className='h3'>Feel free to reach out to me!</h1>
        </div>
      <div className="row ">
        <div className="col-md-6">
          <h2>Contact Form</h2>
          {/* Add your contact form here */}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="col-md-6">
          <h2>Phone Number</h2>
          <p>For immediate assistance, please call us at: <strong>(123) 456-7890</strong></p>
          <h2>Address</h2>
          <p>Prime Plaza: <strong> Kenya</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
