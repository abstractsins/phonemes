'use client';

import styles from './ContactForm.module.css';

import { useState, useEffect, useRef } from 'react';
import Loader from '@/app/components/ui/Loader';

import emailjs from '@emailjs/browser';

import ScreenGuard from '@/app/components/ui/ScreenGuard';
import Loaded from '@/app/components/ui/Loaded';


type Validity = Record<keyof ContactForm, boolean>;

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormError {
    field: keyof ContactForm;
    msg: string;
}


const emptyForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
}


export default function ContactForm() {

    const formRef = useRef<HTMLFormElement>(null);

    const [formError, setFormError] = useState<FormError | undefined>()
    const [isFormAwake, setFormAwake] = useState(false);

    const [isSubmitWaiting, setSubmitWaiting] = useState(false);

    const [formState, setFormState] = useState<ContactForm>(emptyForm);

    const [showLoaded, setShowLoaded] = useState(false);

    const validate = (s: ContactForm): Validity => ({
        name: checkNameInput(s.name) && printableUnicode(s.name),
        email: checkEmailInput(s.email) && printableUnicode(s.email),
        subject: printableUnicode(s.subject),
        message: printableUnicode(s.message),
    });

    const firstError = (v: Validity): FormError | undefined => {
        if (!v.name) return { field: 'name', msg: 'Name is invalid' };
        if (!v.email) return { field: 'email', msg: 'Email is invalid' };
        if (!v.subject) return { field: 'subject', msg: 'Subject is invalid' };
        if (!v.message) return { field: 'message', msg: 'Message is invalid' };
        return undefined;
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const v = validate(formState);

        const ok = Object.values(v).every(Boolean);
        if (!ok) {
            setFormError(firstError(v));
            return;
        }

        setFormError(undefined);
        setSubmitWaiting(true);
        console.warn('SENDING MESSAGE');

        if (formRef.current !== null) {
            formRef.current.contact_number.value = Math.random() * 100000 | 0;
        }

        emailjs.sendForm('contact_service', 'contact_form', formRef.current || '#contactForm')
            .then(
                (res) => {
                    console.log('SUCCESS!', res.status, res.text);
                    setShowLoaded(true);
                    setTimeout(() => setShowLoaded(false), 3000);
                    setFormState(emptyForm);
                },
                (err) => {
                    console.error('FAILED...', err);
                    setFormError({ field: 'message', msg: 'Failed to send. Try again.' });
                }
            )
            .finally(() => {
                setSubmitWaiting(false);
            });
    }


    const checkNameInput = (name: string): boolean => name.length > 0;

    const checkEmailInput = (email: string): boolean => !!email.match(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i);

    const printableUnicode = (str: string): boolean => {
        return Array.from(str).every(c => {
            const code = c.codePointAt(0)!;
            return (
                code >= 0x20 &&         // space and above
                code !== 0x7F &&        // DEL
                !(code >= 0x00 && code <= 0x1F) // control chars
            );
        });
    };

    const clearHandler = () => {
        setFormState(emptyForm);
    };

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    emailjs.init(publicKey);



    // *--------------------- Form Validity --------------------------- //

    useEffect(() => {
        setFormAwake(!!(formState.name && formState.email && formState.message));
    }, [formState]);




    return (
        <div>
            {isSubmitWaiting &&
                <>
                    <Loader msg="sending" />
                    <ScreenGuard />
                </>
            }

            {showLoaded &&
                <Loaded msg='message sent!' />
            }

            <div id='contact-wrapper' className={`${styles['form-wrapper']}`}>

                <div className={`${styles['face']} ${styles['wrapper-front']}`}>

                    <form ref={formRef} id={'contactForm'} className={styles['form']} onSubmit={handleSubmit}>

                        <input type="hidden" name="contact_number" />
                        <div className={styles.leftHalf}>

                            {/* //* --------------------NAME-------------------- // */}
                            <div className={styles['form-row']}>
                                <div className='flex'>
                                    <label className={`${styles['form-label']}`}>Name</label>
                                    {formError && formError.field === 'name' &&
                                        <div className={styles['error-wrapper']}>
                                            <span className={styles['error-text']}>{formError.msg}</span>
                                        </div>
                                    }
                                </div>
                                <input
                                    name='name'
                                    required
                                    type='text'
                                    maxLength={100}
                                    value={formState.name}
                                    className={styles['contact-field']}
                                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                />
                            </div>

                            {/* //* --------------------EMAIL-------------------- // */}
                            <div className={styles['form-row']}>
                                <div className='flex'>
                                    <label className={`${styles['form-label']}`}>Email</label>
                                    {formError && formError.field === 'email' &&
                                        <div className={styles['error-wrapper']}>
                                            <span className={styles['error-text']}>{formError.msg}</span>
                                        </div>
                                    }
                                </div>
                                <input
                                    name='email'
                                    required
                                    type='text'
                                    maxLength={100}
                                    value={formState.email}
                                    className={styles['contact-field']}
                                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value.trim() }))}
                                />
                            </div>

                            {/* //* --------------------SUBJECT-------------------- // */}
                            <div className={styles['form-row']}>
                                <div className='flex'>
                                    <label className={`${styles['form-label']}`}>Subject</label>
                                    {formError && formError.field === 'subject' &&
                                        <div className={styles['error-wrapper']}>
                                            <span className={styles['error-text']}>{formError.msg}</span>
                                        </div>
                                    }
                                </div>
                                <input
                                    name='subject'
                                    type='text'
                                    maxLength={100}
                                    value={formState.subject}
                                    placeholder='Optional'
                                    className={styles['contact-field']}
                                    onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                                />
                            </div>


                            <div className={`${styles['form-row']} ${styles['input-row']}`}>
                                <input
                                    type='submit'
                                    value={'Submit'}
                                    disabled={isSubmitWaiting}
                                    className={`${styles['submit']} ${isFormAwake && !isSubmitWaiting ? styles['valid'] : styles['invalid']}`}
                                />

                                <input
                                    type='button'
                                    value={'Clear'}
                                    onClick={clearHandler}
                                    className={`${styles['clear']} ${isFormAwake && !isSubmitWaiting ? styles['valid'] : styles['invalid']}`}
                                />
                            </div>
                        </div>

                        <div className={styles.rightHalf}>
                            {/* //* --------------------MESSAGE-------------------- // */}

                            <div className={styles['form-row']}>
                                <div className='flex'>
                                    <label className={`${styles['form-label']}`}>Message</label>
                                    {formError && formError.field === 'message' &&
                                        <div className={styles['error-wrapper']}>
                                            <span className={styles['error-text']}>{formError.msg}</span>
                                        </div>
                                    }
                                </div>
                                <textarea
                                    required
                                    name='message'
                                    value={formState.message}
                                    maxLength={300}
                                    className={`${styles['contact-field']} ${styles['message']}`}
                                    placeholder='300 character limit'
                                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                />
                            </div>

                        </div>

                    </form>
                </div>

            </div>
            <aside id='emailjs'>Powered by EmailJS</aside>
        </div>

    );
}