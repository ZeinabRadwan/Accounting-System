<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use NotificationChannels\Twilio\TwilioChannel;
use NotificationChannels\Twilio\TwilioSmsMessage;
use Illuminate\Notifications\Messages\MailMessage;

class QuotationNotification extends Notification
{
    use Queueable;

    protected $via_data, $quotation;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($quotation, $via_data)
    {
        $this->via_data = $via_data;
        $this->quotation = $quotation;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        $channels = [];
        
        // Add email channel if requested
        if ($this->via_data['isSendEmail']) {
            $channels[] = 'mail';
        }
        
        // Add SMS channel if requested and Twilio is configured
        if ($this->via_data['isSendSMS'] && $this->isTwilioConfigured()) {
            $channels[] = TwilioChannel::class;
        }
        
        return $channels;
    }
    
    /**
     * Check if Twilio is properly configured
     *
     * @return bool
     */
    private function isTwilioConfigured()
    {
        return !empty(env('TWILIO_ACCOUNT_SID')) && 
               !empty(env('TWILIO_AUTH_TOKEN')) && 
               !empty(env('TWILIO_FROM'));
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)->view(
            'emails.quotation',
            ['quotation' => $this->quotation]
        );

    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }

    public function toTwilio($notifiable)
    {
        return (new TwilioSmsMessage())
            ->content("Hi $notifiable->name \nThank you for expressing interest in our quotation. We have prepared the quotation for your review. Please find the quotation attached below, where you can check and download it for your convenience.\nQuotation: ". asset('pdfs/Quotation-' . $this->quotation->slug.'.pdf'));
    }
}
