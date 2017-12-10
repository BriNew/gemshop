import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Contact = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
	    <form onSubmit={handleSubmit}>
	      <div>
	        <label>Name</label>
	        <div>
	          <Field
	            name="Name"
	            component="input"
	            type="text"
	            placeholder="Name"
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
	          />
	        </div>
	      </div>
	      <div>
	        <label>Message</label>
	        <div>
	          <Field name="notes" component="textarea" />
	        </div>
	      </div>
	      <div>
	        <button type="submit" disabled={pristine || submitting}>Submit</button>
	        <button type="button" disabled={pristine || submitting} onClick={reset}>
	          Clear Values
	        </button>
	      </div>
	    </form>
	);
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Contact);