import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Contact = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
	    <form role="form" className="default_form contact_form" onSubmit={handleSubmit}>
	      <div>
	        <label>Name</label>
	        <div>
	          <Field
	            name="name"
	            component="input"
	            type="text"
	            placeholder="Name"
	            required
	          />
	        </div>
	      </div>
	      <div>
	        <label>Email</label>
	        <div>
	          <Field
	            name="email"
	            component="input"
	            type="email"
	            placeholder="Email"
	            required
	          />
	        </div>
	      </div>
	      <div>
	        <label>Subject</label>
	        <div>
	          <Field
	            name="subject"
	            component="input"
	            type="text"
	            placeholder="subject"
	            required
	          />
	        </div>
	      </div>
	      <div>
	        <label>Message</label>
	        <div>
	          <Field className="message" name="message" component="textarea" required />
	        </div>
	      </div>
	      <div>
	        <button type="submit" disabled={pristine || submitting}>Submit</button>
	        <button className="clear_button" type="button" disabled={pristine || submitting} onClick={reset}>
	          Clear Values
	        </button>
	      </div>
	    </form>
	);
};

export default reduxForm({
  form: 'simple', 
})(Contact);