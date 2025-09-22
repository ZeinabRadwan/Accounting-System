<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cashbook Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used for the cashbook module including
    | balance adjustments, bank accounts, and related functionality.
    |
    */

    // Page Titles and Headers
    'Create Adjustment' => 'สร้างการปรับปรุง',
    'Adjustments' => 'การปรับปรุง',
    'Cashbook' => 'สมุดเงินสด',
    'Dashboard' => 'แดชบอร์ด',
    'Create' => 'สร้าง',

    // Form Labels
    'Bank Account' => 'บัญชีธนาคาร',
    'Account' => 'บัญชี',
    'Type' => 'ประเภท',
    'Available Balance' => 'ยอดเงินคงเหลือ',
    'Amount' => 'จำนวนเงิน',
    'Date' => 'วันที่',
    'Status' => 'สถานะ',
    'Note' => 'หมายเหตุ',

    // Form Options
    'Add Balance' => 'เพิ่มยอดเงิน',
    'Remove Balance' => 'ลดยอดเงิน',
    'Active' => 'ใช้งาน',
    'Inactive' => 'ไม่ใช้งาน',

    // Placeholders
    'Select a bank account' => 'เลือกบัญชีธนาคาร',
    'Select account for journal entry' => 'เลือกบัญชีสำหรับรายการบัญชี',
    'Enter an amount' => 'ป้อนจำนวนเงิน',
    'Write your note here!' => 'เขียนหมายเหตุของคุณที่นี่!',

    // Buttons
    'Back' => 'กลับ',
    'Save' => 'บันทึก',
    'Reset' => 'รีเซ็ต',

    // Success Messages
    'Adjustment added successfully' => 'เพิ่มการปรับปรุงสำเร็จ',
    'Chart of account added successfully' => 'เพิ่มผังบัญชีสำเร็จ',

    // Error Messages
    'Failed to load chart of accounts' => 'โหลดผังบัญชีไม่สำเร็จ',
    'Please select a second account' => 'กรุณาเลือกบัญชีที่สอง',
    'Opps...something went wrong' => 'อุ๊ปส์...เกิดข้อผิดพลาด',

    // Validation Messages
    'The bank account field is required.' => 'ฟิลด์บัญชีธนาคารจำเป็นต้องกรอก',
    'The account field is required.' => 'ฟิลด์บัญชีจำเป็นต้องกรอก',
    'The amount field is required.' => 'ฟิลด์จำนวนเงินจำเป็นต้องกรอก',
    'The amount must be a number.' => 'จำนวนเงินต้องเป็นตัวเลข',
    'The amount must be greater than 0.' => 'จำนวนเงินต้องมากกว่า 0',
    'The amount cannot exceed available balance.' => 'จำนวนเงินไม่สามารถเกินยอดเงินคงเหลือได้',
    'The date field is required.' => 'ฟิลด์วันที่จำเป็นต้องกรอก',
    'The date must be a valid date.' => 'วันที่ต้องเป็นวันที่ที่ถูกต้อง',
    'The status field is required.' => 'ฟิลด์สถานะจำเป็นต้องกรอก',
    'The note field is optional.' => 'ฟิลด์หมายเหตุเป็นตัวเลือก',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'กรุณาเลือกบัญชีธนาคาร',
            'exists' => 'บัญชีธนาคารที่เลือกไม่ถูกต้อง',
        ],
        'secondAccount' => [
            'required' => 'กรุณาเลือกบัญชีที่สองสำหรับรายการบัญชี',
            'exists' => 'บัญชีที่เลือกไม่ถูกต้อง',
        ],
        'amount' => [
            'required' => 'ฟิลด์จำนวนเงินจำเป็นต้องกรอก',
            'numeric' => 'จำนวนเงินต้องเป็นตัวเลขที่ถูกต้อง',
            'min' => 'จำนวนเงินต้องมากกว่า 0',
            'max' => 'จำนวนเงินไม่สามารถเกินยอดเงินคงเหลือได้',
        ],
        'date' => [
            'required' => 'ฟิลด์วันที่จำเป็นต้องกรอก',
            'date' => 'วันที่ต้องเป็นวันที่ที่ถูกต้อง',
        ],
        'type' => [
            'required' => 'ฟิลด์ประเภทจำเป็นต้องกรอก',
            'in' => 'ประเภทที่เลือกไม่ถูกต้อง',
        ],
        'status' => [
            'required' => 'ฟิลด์สถานะจำเป็นต้องกรอก',
            'in' => 'สถานะที่เลือกไม่ถูกต้อง',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'บัญชีธนาคาร',
        'secondAccount' => 'บัญชีที่สอง',
        'amount' => 'จำนวนเงิน',
        'date' => 'วันที่',
        'type' => 'ประเภท',
        'status' => 'สถานะ',
        'note' => 'หมายเหตุ',
    ],
];
