import { useTranslation } from 'react-i18next';
import { Button } from '@nextui-org/react';
import React from 'react';

export function Config(props) {
    const { updateServiceList, onClose } = props;
    const { t } = useTranslation();

    return (
        <>
            <div>{t('services.no_need')}</div>
            <div>
                <Button
                    fullWidth
                    onPress={() => {
                        updateServiceList('system');
                        onClose();
                    }}
                >
                    {t('common.save')}
                </Button>
            </div>
        </>
    );
}
